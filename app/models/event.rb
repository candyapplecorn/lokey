class Event < ApplicationRecord
  validates :host, :activity, :coordinate, presence: true

  belongs_to :activity

  has_one :coordinate, as: :locatable

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: 'User'

  def self.in_bounds(bounds)
    self.joins(:coordinate)
      .where("latitude < ?", bounds[:northEast][:lat])
      .where("latitude > ?", bounds[:southWest][:lat])
      .where("longitude > ?", bounds[:southWest][:lng])
      .where("longitude < ?", bounds[:northEast][:lng])
  end
end
