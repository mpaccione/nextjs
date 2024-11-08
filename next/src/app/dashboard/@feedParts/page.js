import { DataListItem, DataListRoot } from "@/components/ui/data-list"

const FeedParts = async ({ searchParams }) => {
    const { model } = await searchParams;

    const res = await fetch(`${process.env.API_URL}/parts?model=${model}`);
    const parts = await res.json();

    return (
        <DataListRoot divideY="1px" maxW="md" orientation="horizontal">{parts.map(({ part, price }, idx) => (
            <DataListItem
                grow
                key={idx}
                label={part}
                pt="4"
                value={price}
            />
        ))}</DataListRoot>
    )
}

export default FeedParts;