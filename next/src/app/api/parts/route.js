const carParts = {
    "Accord": [
        { part: "Brake Pads", price: "$50" },
        { part: "Air Filter", price: "$20" },
        { part: "Battery", price: "$100" }
    ],
    "Camry": [
        { part: "Oil Filter", price: "$15" },
        { part: "Spark Plug", price: "$10" },
        { part: "Alternator", price: "$120" }
    ],
    "Forester": [
        { part: "Windshield Wiper", price: "$30" },
        { part: "Headlight Bulb", price: "$25" },
        { part: "Radiator Hose", price: "$35" }
    ],
    "F-150": [
        { part: "Timing Belt", price: "$90" },
        { part: "Battery", price: "$110" },
        { part: "Brake Pads", price: "$55" }
    ]
};

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const model = searchParams.get('model');
    let data = [];

    if (model && carParts.hasOwnProperty(model)) {
        data = carParts[model];
    }

    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}