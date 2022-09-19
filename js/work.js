class Work {
    async getWork() {
        const workResponse = await fetch('./myWorks.json')
        const work = await workResponse.json();

        return work;
    }
}