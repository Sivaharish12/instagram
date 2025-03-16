function Suggestions() {
    const dummySuggestions = [
      { id: 1, username: "alice_wonder", profilePic: "https://picsum.photos/id/64/32/32" },
      { id: 2, username: "bob_marley", profilePic: "https://picsum.photos/id/128/32/32" },
      { id: 3, username: "charlie_brown", profilePic: "https://picsum.photos/id/305/32/32" },
    ];
  
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Suggestions for you</h5>
          {dummySuggestions.map((suggestion) => (
            <div key={suggestion.id} className="d-flex align-items-center mb-2">
              <img
                src={suggestion.profilePic}
                alt="Profile"
                className="rounded-circle me-2"
                style={{ width: "32px", height: "32px" }}
              />
              <span>{suggestion.username}</span>
              <button className="btn btn-sm btn-primary ms-auto">Follow</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Suggestions;