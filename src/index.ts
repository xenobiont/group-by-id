type Id = string | number;

type ById<T> = Map<Id, T>;

function groupById<T extends { id: Id }>(items: T[]): ById<T> {
	const map = new Map<Id, T>();

	items.forEach((item) => {
		map.set(item.id, item);
	});

	return map;
}

const items = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Mary' },
];

// @ts-expect-error
const itemsById = groupById([{ name: 'Joe' }]);

const itemsById2 = groupById([{ id: 1, name: 'Joe' }]);
const itemsById3 = groupById([{ id: '1', name: 'Joe' }]);
const itemsById4 = groupById([{ id: '1', name: 'Joe', surname: 'Doe' }]);
