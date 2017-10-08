class Event < ApplicationRecord
  validates :host, :activity, :coordinate, presence: true

  belongs_to :activity

  has_one :coordinate, as: :locatable

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: 'User'
end
