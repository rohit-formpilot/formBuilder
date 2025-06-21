import {render, screen, waitFor} from "@testing-library/react";
import CardContainer  from "../components/Card/CardContainer";
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';

describe("Testing Card Componet", () => {
    test("Render Post correctly", async() => {
        render(<CardContainer/>);
        expect(await screen.findByText(/User Post/i,  {}, {timeout: 2000})).toBeInTheDocument();
    });

    test("Render List of Post", async () => {
        render(<CardContainer/>);
        const posts = await screen.findAllByRole('article', {}, {timeout: 2000});
        expect(posts.length).toBeGreaterThan(1);
        expect(screen.getByText('User Post')).toBeInTheDocument();
        expect(screen.getByText('Another Post')).toBeInTheDocument();
    });

    test("Render error state when API fails", async () => {
        server.use(
            http.get('https://jsonplaceholder.typicode.com/posts', () => {
                return HttpResponse.error();
            })
        );
        render(<CardContainer/>);
        expect(await screen.findByText(/Error/i)).toBeInTheDocument();
    });

    test("Render loading state", async () => {
        // Simulate a delay in the API response
        server.use(
            http.get('https://jsonplaceholder.typicode.com/posts', async () => {
                await new Promise(res => setTimeout(res, 100));
                return HttpResponse.json([]);
            })
        );
        render(<CardContainer/>);
        expect(screen.getByText(/Loading cards/i)).toBeInTheDocument();
        // Wait for loading to finish
        await waitFor(() => expect(screen.queryByText(/Loading cards/i)).not.toBeInTheDocument());
    });
})