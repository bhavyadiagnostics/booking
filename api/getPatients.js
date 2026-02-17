export default async function handler(req, res) {
    const url = FORM_RESPONSES1_SHEET_URL;
    try {
        const response = await fetch(url);
        const data = await response.text();
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send("Error fetching data");
    }
}
