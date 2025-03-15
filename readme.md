# [Microsoft AI and Chai <> TechNexus Community](https://www.meetup.com/technexus-community/events/306378851/)

## Azure OpenAI Demo

A simple Node.js application that demonstrates how to use the Azure OpenAI service to generate completions.

## Description

This demo shows how to connect to Azure OpenAI using the OpenAI SDK and generate a text completion from a prompt. The sample application sends a prompt to Azure OpenAI and displays the response.

## Prerequisites

- Node.js installed on your machine
- An Azure account with access to Azure OpenAI services
- API credentials for Azure OpenAI

## Installation

1. Clone this repository or create a new folder for your project.
2. Initialize a new Node.js project:
   ```
   npm init -y
   ```
3. Install the required dependencies:
   ```
   npm install openai dotenv
   ```
4. Create a `.env` file in the root directory of your project.

## Environment Setup

Create a `.env` file with the following variables:

```
AZURE_OPENAI_API_KEY=your-api-key
AZURE_OPENAI_ENDPOINT=your-endpoint
AZURE_OPENAI_MODEL=your-deployment-name
API_VERSION=your-api-version
```

### Finding Environment Values in Azure Portal

1. **API Key and Endpoint**:

   - Log in to the [Azure Portal](https://portal.azure.com)
   - Navigate to your Azure OpenAI resource
   - Go to "Keys and Endpoint" in the left sidebar
   - Copy one of the keys (KEY 1 or KEY 2) as your `AZURE_OPENAI_API_KEY`
   - Copy the Endpoint URL as your `AZURE_OPENAI_ENDPOINT`

2. **Deployment Name**:

   - In your Azure OpenAI resource, go to "Model deployments" in the left sidebar
   - Use the deployment name (not the model name) as your `AZURE_OPENAI_MODEL`
   - In this example, we're using "gpt-4o-mini" but you should use the name you've given to your deployment

3. **API Version**:
   - The API_VERSION value (e.g., "2024-02-15-preview") should match the most recent Azure OpenAI API version
   - You can check the latest version in the [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference)

## Usage

1. Save the code from `demo.js` to your project folder.
2. Run the application:
   ```
   node demo.js
   ```

## Output

![Alt Text](https://github.com/user-attachments/assets/ff756604-bba4-4dd3-822d-536fbfe43f22)

## Customization

You can modify the `prompt` variable in the code to send different queries to the Azure OpenAI service.

## Troubleshooting

- If you encounter authentication errors, verify your API key and endpoint are correct.
- Ensure your Azure OpenAI resource has the specified model deployed.
- Check that your account has sufficient quota for the model you're using.

## Further Resources

- [Azure OpenAI Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/)
- [OpenAI Node.js SDK Documentation](https://github.com/openai/openai-node)
