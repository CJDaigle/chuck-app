# pip install requests




import requests

url_api = "https://api.chucknorris.io/jokes/random"

def call_api(api_url):
    try:
        response = requests.get(api_url)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Assuming the API returns JSON data, you can access it using response.json()
            api_data = response.json()
            return api_data
        else:
            print(f"Error: {response.status_code}")
            return None

    except requests.RequestException as e:
        print(f"Error: {e}")
        return None

# Replace 'https://api.example.com' with the actual API endpoint you want to call
api_url = (url_api)
api_response = call_api(api_url)

if api_response is not None:
    # Now 'api_response' contains the data returned by the API
    print("API Response:")
    print(api_response)
else:
    print("Failed to call the API.")
