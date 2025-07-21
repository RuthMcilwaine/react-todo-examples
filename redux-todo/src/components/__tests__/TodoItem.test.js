import React from "react";
import { shallow } from "enzyme";
import TodoItem from "../TodoItem";

describe("<TodoItem />", () => {
  it("renders without errors", () => {
    const onCompleted = jest.fn();
    const onRemoveTodo = jest.fn();
    const todo = { id: 1 };
    const wrapper = shallow(
      <TodoItem
        todo={todo}
        onCompleted={onCompleted}
        onRemoveTodo={onRemoveTodo}
      />
    );

    expect(wrapper.exists()).toBe(true);
  });

  it("simulates a click event for 'Completed' button", () => {
    const onCompleted = jest.fn();
    const todo = { id: 1 };
    const wrapper = shallow(<TodoItem todo={todo} onCompleted={onCompleted} />);

    wrapper.find("button").at(0).simulate("click");
    expect(onCompleted).toHaveBeenCalledWith(todo.id);
  });

  it("simulates a click event for 'Remove' button", () => {
    const todo = { id: 1 };
    const onRemoveTodo = jest.fn();
    const wrapper = shallow(
      <TodoItem todo={todo} onRemoveTodo={onRemoveTodo} />
    );

    wrapper.find("button").at(1).simulate("click");
    expect(onRemoveTodo).toHaveBeenCalledWith(todo.id);
  });
});
