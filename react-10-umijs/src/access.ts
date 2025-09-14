export default function (initialState: any) {
    console.log('access使用initialState', initialState);
    const {userId, role} = initialState;

    return {
        canReadFoo: true,
        canUpdateFoo: role === 'admin',
        canDeleteFoo: (foo: any) => {
            return foo.ownerId === userId;
        },
    };
}