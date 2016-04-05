import {Posts, Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = GraphQL.types;


const query = new GraphQLObjectType({
    name: 'BlogQueries',
    fields: () => ({
        recentPost: {
            type: BlogPost,
            resolve() {
                Meteor._sleepForMs(200); // simulate latency compensation
                return Posts.findOne();
            }
        },

        posts: {
            type: new GraphQLList(BlogPost),
            resolve() {
                Meteor._sleepForMs(200); // simulate latency compensation
                return Posts.find().fetch();
            }
        },

        post: {
            type: BlogPost,
            args: {
                _id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(root, args) {
                Meteor._sleepForMs(200); // simulate latency compensation
                return Posts.findOne({_id: args._id});
            }
        }
    })
});

const mutation = new GraphQLObjectType({
    name: 'BlogMutations',
    fields: () => ({
        addPost: {
            type: BlogPost,
            args: {
                _id: {type: new GraphQLNonNull(GraphQLString)},
                title: {type: new GraphQLNonNull(GraphQLString)},
                content: {type: new GraphQLNonNull(GraphQLString)},
                author: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(root, args) {
                Meteor._sleepForMs(800); // simulate latency compensation
                Posts.insert(args);
                return args;
            }
        },

        reset: {
            type: GraphQLString,
            resolve(root, args, {rootValue}) {
                if (!rootValue.userId) {
                    // if this is not a loggedIn user
                    throw new Error("Unauthorized");
                }
                Meteor._sleepForMs(300); // simulate latency compensation
                Posts.remove({});

            }
        }
    })
});

const schema = new GraphQLSchema({
    query,
    mutation
});

GraphQL.registerSchema('Blog', schema);
