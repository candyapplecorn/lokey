activities = @activities.map do |activity|
  activity.name
end

json.array! activities
