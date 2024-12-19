import { log } from "console";

export default function Dynamic({ params }: { readonly params: {id: string, id1: string} }) {
    log(params)
    return <h1>dynamic {params.id} {params.id1}</h1>;
  }
  