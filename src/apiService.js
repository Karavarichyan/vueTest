// apiService.js
export const sendApiRequest = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Ошибка отправки запроса. Код статуса: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Произошла ошибка при отправке запроса: ${error.message}`);
    }
  };
  