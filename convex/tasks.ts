import { mutation, query } from "./_generated/server";
import { v } from 'convex/values'

export const getTasks = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("tasks").collect();
    }
})

export const createTasks = mutation({
    args: {
        text: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("tasks", {
            text: args.text,
            complete: false
        });
    }
});

export const completeTask = mutation({
    args: {
        id: v.id("tasks"),
        complete: v.boolean(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            complete: args.complete
        })
    }
})