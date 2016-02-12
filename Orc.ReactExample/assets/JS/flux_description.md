We have several different folders / players in our architecture:

- Actions
- Components
    - These are the views. They use the render() method to output HTML markup. 
    - The views are populated with data from the store. This data is fetched (in our example) using the ArticleStore.getArticles(); method
- Dispatchers
- Stores
    - The store (ArticleStore) is responsible for 
- Utils
- Routes
