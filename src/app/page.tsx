import { Container, Flex } from "@radix-ui/themes";
import { redirect } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Container size="1">
        <Flex>
          {redirect("/product")}
          <h1>Meli</h1>
        </Flex>
      </Container>
    </main>
  );
}
