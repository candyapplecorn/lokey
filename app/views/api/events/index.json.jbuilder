@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :host_id, :activity_id, :description
  end
end
