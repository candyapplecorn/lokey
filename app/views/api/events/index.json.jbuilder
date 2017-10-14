@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :host_id, :description
    json.activity event.activity.name
    json.lat event.coordinate.latitude
    json.lng event.coordinate.longitude
  end
end
