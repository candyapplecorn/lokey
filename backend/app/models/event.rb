class Event < ApplicationRecord
  validates :host, :activity, :coordinate, presence: true

  has_one :activity, as: :act_type

  has_one :coordinate, as: :locatable

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: 'User'
end
