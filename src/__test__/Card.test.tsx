import {render, screen } from "@testing-library/react";
import CardContainer  from "../components/Card/CardContainer";

describe("Testing Card Componet", () => {
    test("Render Post correctly", async() => {
        render(<CardContainer/>)
        expect(await screen.findByText(/User Post/i,  {}, {timeout: 2000})).toBeInTheDocument();
    })

    test("Render List of Post", async () => {
        render(<CardContainer/>)
        const posts = await screen.findAllByRole('article', {}, {timeout: 2000});
        expect(posts.length).toBeGreaterThan(1);
    })
})