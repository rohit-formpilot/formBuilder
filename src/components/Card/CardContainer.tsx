import Card from "./Card";
import styles from './Card.module.css';
import { useEffect, useState } from "react";
import { CardProps } from "../../types/CardPropsType";


export default function CardContainer() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        if (!response.ok) throw new Error("Failed to fetch cards");
        const data = await response.json();
        const cardsData: CardProps[] = data.map((item: any) => ({
          id: item.id,
          userId: item.userId,
          title: item.title,
          body: item.body,
        }));

        setCards(cardsData);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  if (loading) return <div>Loading cards...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <h1>User Post</h1>
    <main className={styles.cardConatiner}>
      {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
    </main>
    </>
  );
}
