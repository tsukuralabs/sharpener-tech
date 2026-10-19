📚 CSS Combinators & Grouping Selectors1. What are Combinators?Definition: Combinators explain the relationship between different CSS selectors.Syntax: Selector1 [Combinator] Selector2Core Types (4 Main Combinators):Descendant (  - Space)Child (>)General Sibling (~)Adjacent Sibling (+)2. Detailed Breakdown of Combinators① Descendant Combinator (  - Space)Symbol: Empty SpaceBehavior: Selects all matching elements that are descendants (children, grandchildren, great-grandchildren, etc.) of the specified parent element.Example:CSS#container p {
    background-color: yellow;
}
Result: Every paragraph (<p>) inside #container gets a yellow background, regardless of how deep they are nested.② Child Combinator (>)Symbol: Right angle bracket (>)Behavior: Selects only direct children of a specified parent. It will not select nested descendants (grandchildren or deeper).Rule: All children are descendants, but not all descendants are children.Example:CSS#container > p {
    background-color: yellow;
}
Result: Highlights direct paragraph children of #container, but skips paragraphs nested further down inside an inner <div>.③ General Sibling Combinator (~)Symbol: Tilde (~)Behavior: Selects all sibling elements that follow a specified element (sharing the same parent).Example:CSS#container ~ p {
    background-color: yellow;
}
Result: Selects all paragraphs that are siblings to the #container element (e.g., brothers/sisters in the same parent container).④ Adjacent Sibling Combinator (+)Symbol: Plus sign (+)Behavior: Selects only the very next adjacent sibling element that immediately follows the specified element.Example:CSS#container + p {
    background-color: yellow;
}
Result: Only the immediate next paragraph following #container is selected (subsequent paragraphs are ignored).💡 Quick Summary TableCombinatorSymbolWhat it SelectsExampleDescendantSpaceAll nested elements inside the parentdiv pChild>Only direct children of the parentdiv > pGeneral Sibling~All following sibling elementsdiv ~ pAdjacent Sibling+Only the immediate next sibling elementdiv + pReference Video: Learn CSS combinators in 4 minutes! ➕