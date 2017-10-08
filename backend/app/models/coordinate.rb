class Coordinate < ApplicationRecord
  belongs_to :locatable, polymorphic: true
end
