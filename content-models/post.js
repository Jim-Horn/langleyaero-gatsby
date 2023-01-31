module.exports = function (migration) {
    const post = migration
        .createContentType("post")
        .name("Post")
        .description("")
        .displayField("name");
    post.createField("name")
        .name("name")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    post.createField("slug")
        .name("slug")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    post.createField("entry")
        .name("Entry")
        .type("RichText")
        .localized(false)
        .required(false)
        .validations([
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    post.createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Symbol",
            validations: [],
        });

    post.changeFieldControl("name", "builtin", "singleLine", {});
    post.changeFieldControl("slug", "builtin", "singleLine", {});
    post.changeFieldControl("entry", "builtin", "richTextEditor", {});

    post.changeFieldControl("tags", "builtin", "tagEditor", {
        helpText: "Identifier tags",
    });
};
