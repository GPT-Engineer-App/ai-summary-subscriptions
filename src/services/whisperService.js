const WHISPER_API_ENDPOINT = "https://your-whisper-api-endpoint.com/transcribe"; // Placeholder for the actual API endpoint

export const transcribeAudio = async (audioFile) => {
  try {
    const formData = new FormData();
    formData.append("file", audioFile);

    const response = await fetch(WHISPER_API_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.transcription;
  } catch (error) {
    console.error("Transcription error:", error);
    throw error;
  }
};