// Images imported with a vite-imagetools query (e.g. `photo.jpg?w=800&format=webp`) resolve to a URL string.
// TypeScript allows a single `*` per pattern, so match on how the query ends.
declare module '*&format=webp' {
  const src: string
  export default src
}
declare module '*&quality=75' {
  const src: string
  export default src
}
