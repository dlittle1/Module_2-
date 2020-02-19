# URLs
   - URL (Uniform Resource Locator)
   - www.amazon.com/clothing

   # Base URL
      - www.amazon.com
   # Endpoint
      - /clothing/jackets
   # Parameter - requesting specific resources from a database (id)
      - /clothing/jackets/:_id_
      - /clothing/jackets/8v9jeofjl
   # Query (query strings)
      - www.amazon.com/clothing/jackets?color=black&type=leather (query parameters in key=value pairs)

      const query = {
         color: black,
         type: leather
      }
