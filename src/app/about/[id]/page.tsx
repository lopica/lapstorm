export default function Dynamic({ params }: { readonly params: {id: string} }) {
  return <h1>dynamic {params.id}</h1>;
}
