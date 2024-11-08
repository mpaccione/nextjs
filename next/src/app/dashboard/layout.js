import { Box, Flex } from "@chakra-ui/react";

const Dashboard = ({ feedCars, feedParts }) => {
    return (
        <div>
            <Flex>
                <Box>
                    <h1>Cars Feed</h1>
                    <Flex column="4" gap="4">{feedCars}</Flex>
                </Box>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Box>
                    <h1>Parts Feed</h1>
                    <Flex column="4" gap="4">{feedParts}</Flex>
                </Box>
            </Flex>
        </div >
    )
}

export default Dashboard;