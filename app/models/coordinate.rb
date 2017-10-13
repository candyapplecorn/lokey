class Coordinate < ApplicationRecord
  belongs_to :locatable, polymorphic: true
  validates :latitude, presence: true
  validates :longitude, presence: true
end
