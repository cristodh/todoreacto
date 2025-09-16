import '../styles/ProgressBar.css'
function ProgressBar({tasksList}) {

const completedTasks = tasksList.filter(task => task.Status === "Completed").length;
const totalTasks = tasksList.length;

const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
     <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
}

export default ProgressBar