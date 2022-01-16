import {
	graphql,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
} from 'https://raw.githubusercontent.com/adelsz/graphql-deno/v15.0.0/mod.ts'

var schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			hello: {
				type: GraphQLString,
				resolve() {
					return 'world'
				},
			},
		},
	}),
})

var source = '{ hello }'

graphql({schema, source}).then((result: any) => {
	// Prints
	// {
	//   data: { hello: "world" }
	// }
	console.log(result)
})
