export const getProductos = async (formData, setResult, setLoading) => {
    setLoading(true)
    const key = import.meta.env.API_KEY
    console.log(key)
    try {
      const response = await fetch(`https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${formData.search}&page=1&sortBy=best_match`, {
        method: "GET",
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      setResult(result?.item?.props?.pageProps?.initialData?.searchResult?.itemStacks[0]?.items)

      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };