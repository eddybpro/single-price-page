function Plans() {
  return (
    <main>
      <div className="Plan">
        <h2 className="Plan-Title">Monthly Subscription</h2>
        <div>
          <strong className="Plan-Price">$29</strong>
          <span>per month</span>
        </div>
        <p className="Plan-Info">Full access for less than $1 a day</p>
        <button className="Plan-Btn">Sign Up</button>
      </div>
      <div className="WhyUsBox">
        <h2 className="WhyUsBox-Title">why us</h2>
        <ul>
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises </li>
          <li>Access to our GitHub repos</li>
          <li>Community forum </li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </main>
  );
}
export default Plans;
