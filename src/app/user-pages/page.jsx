export default async function UserPages(){

        const response = await fetch("/api/git-users");
        if (response.ok){
            return response.json();
            else {
                throw new Error("Error getting users from API.")
            }
        }
}