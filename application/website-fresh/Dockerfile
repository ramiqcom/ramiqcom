FROM denoland/deno:latest

# Set working directory
WORKDIR /usr/src/app

# Copy the application
COPY . .

# Build the application
RUN deno task build

# Expose the port
EXPOSE 3000

# Run the application
CMD [ "deno", "task", "preview" ]
