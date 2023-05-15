const photos = document.querySelectorAll('.photos div');

const createTooltip = (e) => {
  const tooltipParent = e.target;
  const tooltipText = e.target.dataset.tooltip;
  const tooltip = document.createElement('span');
  tooltip.className = 'tooltip';
  tooltip.innerHTML = tooltipText;
  tooltipParent.appendChild(tooltip);
};

const removeTooltip = () => {
  const tooltip = document.querySelector('.tooltip');
  tooltip.remove();
};

photos.forEach((photo) => {
  photo.addEventListener('mouseover', createTooltip);
  photo.addEventListener('mouseout', removeTooltip);
});
