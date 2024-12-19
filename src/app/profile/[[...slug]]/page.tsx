import { log } from "console";
import { notFound } from "next/navigation";

export default function Dynamic({
  params,
}: {
  readonly params: { slug: string[] };
}) {
  log(params?.slug);
  if (parseInt(params?.slug?.[0]) > 10) return notFound();
  return <h1>cathc on segment {params?.slug?.[0]}</h1>;
}
