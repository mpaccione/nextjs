import { Button } from "@chakra-ui/react"
import Link from 'next/link';

import { DataListItem, DataListRoot } from "@/components/ui/data-list"

const items = [
    { label: "Honda", value: "Accord" },
    { label: "Toyota", value: "Camry" },
    { label: "Subaru", value: "Forester" },
    { label: "Ford", value: "F-150" },
]

const FeedCars = () => {
    return (
        <DataListRoot divideY="1px" maxW="md" orientation="horizontal">{items.map(({ label, value }, idx) => (
            <DataListItem
                grow
                key={idx}
                label={label}
                pt="4"
                value={value}
            >
                <Link href={`/dashboard?model=${value}`}>
                    <Button>Find Parts</Button>
                </Link>
            </DataListItem>
        ))}</DataListRoot>
    )
}

export default FeedCars;