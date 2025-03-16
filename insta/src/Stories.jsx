import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For navigation arrows

function Stories() {
  const [stories, setStories] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null); // Tracks the currently viewed story index

  // Fetch stories from JSON server
  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((response) => response.json())
      .then((data) => setStories(data))
      .catch((err) => console.log("Error fetching stories:", err.message));
  }, []);

  // Open a story when clicked
  const openStory = (index) => {
    setSelectedStory(index);
  };

  // Close the story viewer
  const closeStory = () => {
    setSelectedStory(null);
  };

  // Navigate to the previous story
  const prevStory = () => {
    if (selectedStory > 0) {
      setSelectedStory(selectedStory - 1);
    }
  };

  // Navigate to the next story
  const nextStory = () => {
    if (selectedStory < stories.length - 1) {
      setSelectedStory(selectedStory + 1);
    }
  };

  return (
    <div className="mb-4">
      {/* Stories List */}
      <div
        className="d-flex overflow-auto"
        style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
      >
        {stories ? (
          stories.map((story, index) => (
            <div
              key={story.id}
              className="text-center mx-2"
              style={{ minWidth: "80px", cursor: "pointer" }}
              onClick={() => openStory(index)}
            >
              <img
                src={story.user.profilePic}
                alt={story.user.username}
                className="rounded-circle"
                style={{
                  width: "64px",
                  height: "64px",
                  border: "2px solid #e1306c",
                }}
              />
              <p className="mt-1" style={{ fontSize: "12px" }}>
                {story.user.username}
              </p>
            </div>
          ))
        ) : (
          <p>Loading stories...</p>
        )}
      </div>

      {/* Story Viewer Modal */}
      {selectedStory !== null && stories && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", zIndex: 1050 }}
          onClick={closeStory} // Close when clicking outside
        >
          <div
            className="position-relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Left Arrow */}
            {selectedStory > 0 && (
              <FaArrowLeft
                className="position-absolute"
                style={{
                  left: "-70px", // Adjusted for larger image
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  fontSize: "40px", // Larger arrow
                  cursor: "pointer",
                }}
                onClick={prevStory}
              />
            )}

            {/* Story Image */}
            <img
              src={stories[selectedStory].user.profilePic} // Use storyImage if added to JSON
              alt={stories[selectedStory].user.username}
              style={{
                width: "100vw", // Full viewport width
                maxWidth: "600px", // Cap at 600px to avoid overly large images
                height: "auto", // Maintain aspect ratio
                maxHeight: "90vh", // Almost full viewport height
                objectFit: "contain", // Ensure the image fits without cropping
              }}
            />
            <div
              className="text-center text-white mt-2"
              style={{ fontSize: "18px" }} // Slightly larger username text
            >
              {stories[selectedStory].user.username}
            </div>

            {/* Right Arrow */}
            {selectedStory < stories.length - 1 && (
              <FaArrowRight
                className="position-absolute"
                style={{
                  right: "-70px", // Adjusted for larger image
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  fontSize: "40px", // Larger arrow
                  cursor: "pointer",
                }}
                onClick={nextStory}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Stories;