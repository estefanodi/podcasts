import { render, screen } from "@testing-library/react";
import { Toolbar } from "./toolbar";
import { EPISODES } from "../../../constants";

describe("Toolbar", () => {
  it("renders the EPISODES constant", () => {
    render(<Toolbar episodesCount={10} />);

    const expected = `${EPISODES}${10}`;

    expect(screen.getByText(expected)).toBeInTheDocument();
  });
});
