const formatUSD = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
};

export const formatHourlyComp = (compensation_min, compensation_max) => {
  if (compensation_max === null) {
    return `${formatUSD(compensation_min)}/hr`;
  } else {
    return `${formatUSD(compensation_min)} - ${formatUSD(compensation_max)}/hr`;
  }
};

export const formatSalaryComp = (compensation_min, compensation_max) => {
  if (compensation_max === null) {
    return formatUSD(compensation_min);
  } else {
    return `${formatUSD(compensation_min)} - ${formatUSD(compensation_max)}`;
  }
};
