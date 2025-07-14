export const users = [
	{
		id: 1,
		name: 'Parth Joshi'
	},
	{
		id: 2,
		name: 'Shivam Joshi'
	},
	{
		id: 3,
		name: 'Avinash Joshi'
	}
];
// GET call
export async function GET() {
	return Response.json(users);
}

// POST call
export async function POST(request: Request) {
	const user = await request.json();
	const newUser = {
		id: users.length + 1,
		name: user.name
	};
	users.push(newUser);
	return new Response(JSON.stringify(newUser), {
		headers: {
			'Content-type': 'application/json'
		},
		status: 201
	});
}

// PUT  call
export async function PUT() {}

// PATCH call
export async function PATCH() {}

// DELETE call
export async function DELETE() {}
