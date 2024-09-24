import axios from "axios";
import { getTasks } from "./taskSlice";
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import MockAdapter from "axios-mock-adapter"
import taskService from "./taskService";

const mockStore = configureMockStore([thunk])
const mock = new MockAdapter(axios)

describe("taskSlice", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            task: {
                tasks: [],
                isLoading: false,
                isSuccess: false,
                isError: false,
                message: "",
            },
            auth: {
                user: {token: "mock_token"}
            }
        });
    });

    afterEach(() => {
        mock.reset()
        store.clearActions()
    })

    test("Calls the getTasks function from taskSlice.js", async () => {
        const token = "mock_token";
        const tasks = [
            {
                _id:"66efb1524277358cf745ac46",
                text:"Learn React Hooks ",
                user:"66efa3f3c9155f53bccfd6af",
                createdAt:"2024-09-22T05:55:30.934Z",
                updatedAt:"2024-09-22T05:55:30.934Z",
                __v:0,
            }
        ]

        const getTasksSpy = jest.spyOn(taskService, 'getTasks').mockResolvedValue(tasks);
        await store.dispatch(getTasks())

        expect(getTasksSpy).toHaveBeenCalled()
    })
})