const web = {
    _req: async (requestString) => {
        const request = await fetch(requestString);
        return request
        }
}

export { web };