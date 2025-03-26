import { render, screen } from "@testing-library/react";

import { Toolbar } from "./toolbar";
import { EPISODES } from "@src/constants";

describe("Toolbar", () => {
  it("renders the EPISODES constant and correct episodes count", () => {
    const episodesCount = 10;
    render(<Toolbar episodesCount={episodesCount} />);

    const expected = `${EPISODES}${episodesCount}`;

    expect(screen.getByText(expected)).toBeInTheDocument();
  });
});
