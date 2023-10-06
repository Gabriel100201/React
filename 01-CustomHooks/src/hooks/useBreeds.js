function useBreeds() {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((res) => res.json())
            .then((data) => {
                const breedNames = Object.keys(data.message);
                setBreeds(breedNames);
            });
    }, []);
}