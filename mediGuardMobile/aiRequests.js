const anonymizeText = async (input) => {
    try {
        const response = await fetch('http://127.0.0.1:5000/anonymize', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput: input }),
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch (error){
        console.error(error);
    }
};

export default anonymizeText;
