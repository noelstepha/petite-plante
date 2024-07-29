export interface Article {
    id: string,
    title: string,
    path: string,
    cover: string,
    category: string,
    nbWords: number,
    body?: string,
}