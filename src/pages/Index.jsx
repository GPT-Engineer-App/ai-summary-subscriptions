import { Container, VStack, Box, Text, Image, Flex, Heading } from "@chakra-ui/react";

const Index = () => {
  const videos = [
    { id: 1, title: "Video 1", thumbnail: "https://via.placeholder.com/150", summary: "AI-generated summary for Video 1" },
    { id: 2, title: "Video 2", thumbnail: "https://via.placeholder.com/150", summary: "AI-generated summary for Video 2" },
    { id: 3, title: "Video 3", thumbnail: "https://via.placeholder.com/150", summary: "AI-generated summary for Video 3" },
  ];

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">YouTube Subscriptions</Heading>
        {videos.map((video) => (
          <Box key={video.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Flex>
              <Image src={video.thumbnail} alt={video.title} boxSize="150px" objectFit="cover" borderRadius="md" />
              <Box ml={5}>
                <Heading as="h2" size="md">{video.title}</Heading>
                <Text mt={2}>{video.summary}</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;